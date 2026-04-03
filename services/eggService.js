const Egg = require("../models/egg");

class EggService {
    async getAllEggs() {
        console.log("Service : Fetching eggs...")
        return await Egg.findAll();
    }

    async getEggById(id) {
        return await Egg.findByPk(id);
    }

    async createEgg(newEgg) {
        return await Egg.create(newEgg);
    }

    async updateEgg(id, updateEgg) {
        const egg = await Egg.findByPk(id);
        if(!egg) return null;

        return await egg.update(updateEgg);
    }

    async deleteEgg(id) {
        const egg = await Egg.findByPk(id);
        if(!egg) return null;

        await egg.destroy()
        return true;
    }
}

module.exports = new EggService;