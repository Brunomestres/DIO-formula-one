"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var import_fastify = __toESM(require("fastify"));
var teams = [
  { id: 1, name: "Ferrari", base: "Maranello, Italy" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" }
];
var drivers = [
  { id: 1, name: "Charles Leclerc", team: "Ferrari", country: "Monaco" },
  { id: 2, name: "Lewis Hamilton", team: "Mercedes", country: "United Kingdom" },
  { id: 3, name: "Max Verstappen", team: "Red Bull Racing", country: "Netherlands" },
  { id: 4, name: "Lando Norris", team: "McLaren", country: "United Kingdom" },
  { id: 5, name: "Fernando Alonso", team: "Aston Martin", country: "Spain" }
];
var fastify = (0, import_fastify.default)({ logger: true });
fastify.get("/teams", (req, reply) => __async(exports, null, function* () {
  reply.type("application/json").status(200);
  return teams;
}));
fastify.get("/drivers", (req, reply) => __async(exports, null, function* () {
  reply.type("application/json").status(200);
  return drivers;
}));
fastify.get("/drivers/:id", (req, reply) => __async(exports, null, function* () {
  const id = Number(req.params.id);
  const driver = drivers.find((driver2) => driver2.id === id);
  if (!driver) {
    reply.type("application/json").status(404);
    return { message: "Driver not found" };
  }
  reply.type("application/json").status(200);
  return driver;
}));
fastify.listen({ port: 3333 }, () => {
  console.log("Running Server");
});
