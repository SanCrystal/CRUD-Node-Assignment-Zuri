const User = require('../models/userSchema')
    //home page
exports.homepage = (req, res) => {
    res.status(200).json({ message: { Title: "CRUD APPLICATION ASSIGNMENT", routes: { createANewUser: "/users/register", fetchAsingleUser: "/users/:id", fetchAllTheUsers: "/users", updateAUser: "/users/:id", deleteAuser: "/users/:id" } } })
}

//controller for creating a new user
exports.createNewUser = function(req, res) {

    User.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, result) => {
        if (err) return res.status(500).json({ message: err });
        res.status(200).json({ message: `User ${req.body.name} has been successfully registered!`, data: result })
    })

};

//controller for fetching single user
exports.fetchSingleUser = (req, res) => {
    User.findById(req.params.id, (err, result) => {
        if (!result) return res.status(404).json({ message: "User does not exist" });
        if (err) return res.status(500).json({ message: ` error with request ${err}` });
        res.status(200).json({ message: `User with ID ${req.params.id} was found sucessfully!`, data: result })
    });
};

//controller for fetching all users

exports.fetchAllUsers = (req, res) => {

    User.find({}, (err, result) => {
        if (Object.keys(result).length === 0) return res.status(404).json({ message: "Could not fetch users" });
        if (err) return res.status(500).json({ message: err })
        res.status(200).json({ message: "User(s) sucessfully fetched!", data: result })
    });


};


//controller for updating a user
exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (!result) return res.status(404).json({ message: "User does not exist" })
        if (err) return res.status(500).json({ message: err });
        //user message for successful data update 
        let { name, email, country } = req.body;
        name = name !== undefined ? ` New name --> ${name},` : '';
        email = email !== undefined ? ` New email --> ${email},` : '';
        country = country !== undefined ? ` New country --> ${country},` : '';
        result.save((err, data) => {
            if (err) return res.status(400).json({ message: err })
            res.status(200).json({ message: `${country} ${name} ${email} was sucessfully updated!`, data: data })

        })

    });
};

//controller for deleting a user
exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, result) => {
        if (!result) return res.status(404).json({ message: "User does not exist" })
        if (err) return res.status(500).json({ message: err })
        res.status(200).json({ message: `User with ID: ${req.params.id} was sucessfully deleted! `, data: result })
    });

};