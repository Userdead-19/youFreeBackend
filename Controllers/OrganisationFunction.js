const Organisation = require("../models/OrganisationModal");

const CreateOrganisation = async (req, res) => {
  try {
    const organisation = new Organisation({
      organisationName: req.body.organisationName,
      organisationDescription: req.body.organisationDescription,
      Members: req.body.organisationMembers,
    });
    const savedOrganisation = await organisation.save();
    res.json(savedOrganisation);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetOrganisation = async (req, res) => {
  try {
    const { organisationName } = req.params;
    const organisation = await Organisation.find({
      organisationName: organisationName,
    });
    res.json(organisation);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetOrganisationMembers = async (req, res) => {
  try {
    const { organisationName } = req.params;
    const organisation = await Organisation.find({
      organisationName: organisationName,
    });
    res.json(organisation[0].Members);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  CreateOrganisation,
  GetOrganisation,
  GetOrganisationMembers,
};
