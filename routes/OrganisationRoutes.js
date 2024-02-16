const Router = require("express").Router();

const {
  CreateOrganisation,
  GetOrganisation,
  GetOrganisationMembers,
} = require("../Controllers/OrganisationFunctions");

Router.post("/createOrganisation", CreateOrganisation);

Router.get("/getOrganisation/:organisationName", GetOrganisation);

Router.get("/getOrganisationMembers/:organisationName", GetOrganisationMembers);
