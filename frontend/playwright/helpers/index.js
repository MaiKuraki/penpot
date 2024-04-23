export const interceptRPC = async (page, path, jsonFilename, options = {}) => {
  const interceptConfig = {
    status: 200,
    ...options
  };

  await page.route(`**/api/rpc/command/${path}`, (route) => {
    route.fulfill({
      ...interceptConfig,
      contentType: "application/transit+json",
      path: `playwright/fixtures/${jsonFilename}`,
    });
  });
};
