export const heartbeatCode = `import process from 'process';

const { env: { NODE_ENV } } = process;
const dev = NODE_ENV !== "production";

// Wrap your main App with Heartbeat.
<Heartbeat disabled={dev}>
  <App />
</Heartbeat>`;

export const authRouteCode = `<Routes>
  <Route element={<AuthRoute auth={token} />}>
    <Route path="/" element={<Content />} />
  </Route>
</Routes>`;

export const toTopCode = `<ToTop
  icon="fa-solid fa-angles-up"
/>`;

export const aggTimerCode = `<AggTimer timeframe="months" aggregate={3} />`;

export const statusCode = `const green = "#50b990";
const yellow = "#f0b800";
const red = "#c93434";

<Status color={green} text="App servers" />
<Status color={yellow} text="Media servers" />
<Status color={red} text="Email sending" />`;