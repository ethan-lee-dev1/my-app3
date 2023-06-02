//Ethan Lee

import { QueryClient, QueryClientProvider } from "react-query";
import { RedStripe } from "./RedStripe";
import { BlueStripe } from "./BlueStripe";
import { RecoilRoot } from "recoil";
import { GreenStripe } from "./GreenStripe";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RedStripe />
          <BlueStripe />
          <GreenStripe />
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
}

export default App;
