import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { HStack, VStack } from "@chakra-ui/react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <VStack w="full" h="100vh" justifyContent="center" alignItems="center" gap={5}>
      <HStack>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </HStack>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to={`/game`}>Go To Game</Link>
    </VStack>
  );
}

export default Home;
