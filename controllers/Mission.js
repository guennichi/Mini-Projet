const Mission = require('../models/Mission');

exports.createMission = (req, res, next) => {
  const Mission = new Mission({
    Tache: req.body.Tache,
    Description: req.body.Description,
    Datedebut: req.body.Datedebut,
    DateFin: req.body.DateFin,
    Equipe: req.body.Equipe,
  });
  Mission.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneMission = (req, res, next) => {
    Mission.findOne({
    _id: req.params.id
  }).then(
    (Mission) => {
      res.status(200).json(Mission);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyMission = (req, res, next) => {
  const Mission= new Mission({
    _id: req.params.id,
    Tache: req.body.Tache,
    Description: req.body.Description,
    Datedebut: req.body.Datedebut,
    DateFin: req.body.DateFin,
    Equipe: req.body.Equipe,
  });
  Mission.updateOne({_id: req.params.id}, Mission).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteMission = (req, res, next) => {
    Mission.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllMission = (req, res, next) => {
  Todo.find().then(
    (Missions) => {
      res.status(200).json(Missions);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};