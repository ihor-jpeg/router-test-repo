import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { WebsiteRoutes } from "./routes";

export const useRedirect = () => {
  const navigate = useNavigate();

  const navigateToUsers = useCallback(() => {
    navigate(WebsiteRoutes.UsersList);
  }, [navigate]);


  const navigateToHome = useCallback(() => {
    navigate(WebsiteRoutes.Home);
  }, [navigate]);

  const navigateToUserById = useCallback((id: number) => {
    navigate(`${WebsiteRoutes.UsersList}/${id}`);
  }, [navigate]);

  const navigateToHelp = useCallback(() => {
    navigate(WebsiteRoutes.Help);
  }, [navigate]);

  return {
    navigateToUsers,
    navigateToHome,
    navigateToUserById,
    navigateToHelp,
  };
};
