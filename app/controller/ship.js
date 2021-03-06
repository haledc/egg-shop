const { Controller } = require("egg");

class ShipController extends Controller {
  async getShipList() {
    const { ctx } = this;
    const shipList = await this.service.ship.findShipList();
    ctx.helper.successResponse(ctx, shipList);
  }

  async shipChecked() {
    const { ctx } = this;
    const { shipId: _id } = ctx.request.body;
    const shipList = await this.service.ship.checkedShip(_id);
    ctx.helper.successResponse(ctx, shipList);
  }
}

module.exports = ShipController;
