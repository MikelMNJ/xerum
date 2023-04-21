
export const hmrPatch = () => ({
  name: 'singleHMR',
  handleHotUpdate({ modules }) {
    modules.map(module => {
      module.importedModules = new Set();
      module.importers = new Set();
    });

    return modules;
  },
});