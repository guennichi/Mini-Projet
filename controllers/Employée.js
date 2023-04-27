const Employée = require('../models/Employée');

exports.createEmployée = (req, res, next) => {
  const Employée = new Employée({
    Nom: req.body.Nom,
    Prenom: req.body.Prenom,
    Email: req.body.Email,
    Categorie: req.body.Categorie,
    Specialite: req.body.Specialite,
    NumCnss: req.body.NumCnss,
    Age: req.body.Age,
    Disponibilité: req.body.Disponibilité
  });
  Employée.save().then(
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

exports.getOneEmployée = (req, res, next) => {
    Employée.findOne({
    _id: req.params.id
  }).then(
    (Employée) => {
      res.status(200).json(Employée);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyEmployée = (req, res, next) => {
  const Employée= new Employée({
    _id: req.params.id,
    Nom: req.body.Nom,
    Prenom: req.body.Prenom,
    Email: req.body.Email,
    Categorie: req.body.Categorie,
    Specialite: req.body.Specialite,
    NumCnss: req.body.NumCnss,
    Age: req.body.Age,
    Disponibilité: req.body.Disponibilité
  });
  Employée.updateOne({_id: req.params.id}, Employée).then(
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

exports.deleteEmployée = (req, res, next) => {
    Employée.deleteOne({_id: req.params.id}).then(
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

exports.getAllEmployée = (req, res, next) => {
    Employée.find().then(
    (Employées) => {
      res.status(200).json(Employées);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};