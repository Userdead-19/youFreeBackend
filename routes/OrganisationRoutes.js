const Router = require("express").Router();

const {
  CreateOrganisation,
  GetOrganisation,
  GetOrganisationMembers,
  updateOrganisationMembers,
} = require("../Controllers/OrganisationFunction");

Router.post("/createOrganisation", CreateOrganisation);

Router.get("/getOrganisation/:organisationName", GetOrganisation);

Router.get("/getOrganisationMembers/:organisationName", GetOrganisationMembers);

Router.get(
  "/updateOrganisationMembers/:organisationName",
  updateOrganisationMembers
);

module.exports = Router;
