module.exports = (app) => {
  const { router, controller } = app;
  router.get("/ship/list", controller.ship.getShipList);
  router.post("/ship/checked", controller.ship.shipChecked);
};
