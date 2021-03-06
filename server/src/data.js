const sessions = {};
const players = {};

class Planet {
    constructor(id, resources) {
        this.id = id;
        this.resources = resources;
        this.position = null;
        this.spaceshipsInOrbit = [];
    }
}

class Spaceship {
    constructor(id) {
        this.id = id;
        this.position = null;
        this.angle = null;
        this.resources = null;
        this.respawnTime = 0;
    }
}

class Player {
    constructor(id, ws) {
        this.id = id;
        this.sessionId = null;
        this.color = null;
        this.ready = false;
        this.ws = ws;
    }
}

module.exports = {
    Player,
    Planet,
    Spaceship,
    sessions,
    players,
};
