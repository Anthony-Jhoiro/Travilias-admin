import Keycloak from "keycloak-js";


export function KeycloakProvider(callback: (profile: Keycloak.KeycloakInstance) => void) {
  const url = import.meta.env.VITE_KEYCLOAK_URL ?? "";
  const realm = import.meta.env.VITE_KEYCLOAK_REALM ?? "";
  const clientId = import.meta.env.VITE_KEYCLOAK_CLIENT_ID ?? "";

  let initOptions = {
    url: url as string,
    realm: realm as string,
    clientId: clientId as string,
    onLoad: 'login-required',
  };

  let keycloak = Keycloak(initOptions);

  keycloak
    .init({ onLoad: "login-required" })
    .then((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        console.info("Authenticated");

        keycloak.loadUserProfile()
        .then(() => {
          if (keycloak.profile) {
            callback(keycloak)
          }
        });
      }

      //Token Refresh
      setInterval(() => {
        keycloak
          .updateToken(70)
          .then((refreshed) => {
            if (refreshed) {
              console.info("Token refreshed " + refreshed);
            } else {
              if (!keycloak.tokenParsed?.exp || !keycloak.timeSkew) return;

              console.warn(
                "Token not refreshed, valid for " +
                  Math.round(
                    keycloak.tokenParsed.exp +
                      keycloak.timeSkew -
                      new Date().getTime() / 1000
                  ) +
                  " seconds"
              );
            }
          })
          .catch(() => {
            console.error("Failed to refresh token");
          });
      }, 6000);
    })
    .catch(() => {
      console.error("Authenticated Failed");
    });
}
