import { Game } from "../../Components/Game";
import { HomepageLayout } from "../../Containers/HomepageLayout";

export const Homepage = () => {
  return (
    <HomepageLayout>
      <Game boardSize={7} />
    </HomepageLayout>
  );
};
