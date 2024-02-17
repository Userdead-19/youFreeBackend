const Router = require("express").Router();

const {
  CreateOrganisation,
  GetOrganisation,
  getUserOrganisations,
  GetOrganisationMembers,
  updateOrganisationMembers,
} = require("../Controllers/OrganisationFunction");

Router.post("/createOrganisation", CreateOrganisation);

Router.get("/getOrganisation/:organisationName", GetOrganisation);

Router.get("/getOrganisationMembers/:organisationName", GetOrganisationMembers);

Router.get("/getUserOrganisations/:userId", getUserOrganisations);

Router.get(
  "/updateOrganisationMembers/:organisationName",
  updateOrganisationMembers
);

module.exports = Router;
