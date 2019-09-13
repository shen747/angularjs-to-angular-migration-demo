/**  processes HTTP requests and defines available endpoints */

// Import homes model
import { Home } from './model';
import * as _ from 'lodash';

// Handle index actions
export let index = function (req, res) {

    Home.findAll().then((homes) => {
        res.json({
            status: "success",
            message: "Homes retrieved successfully",
            data: homes
        });
    }, (err) => {
        res.json({
            status: "error",
            message: err,
        });
    });
};

// Handle create contact actions
export let add = function (req, res) {

    let homeAdded = {
        name: _.get(req, 'body.name'),
        email: _.get(req, 'body.email'),
        phone: _.get(req, 'body.phone'),
        address: _.get(req, 'body.address')
    };
    Home.create(homeAdded).then((home)=>{
        res.json({
            message: 'New Home created!',
            data: home
        })
    }, (err) => {
        res.json(err);
    });
};

// Handle view home info
export let view = function (req, res) {

    let homeId = req.params.home_id;
    Home.find({
        where: {
            homeid: homeId
        }
    }).then((home) => {
        res.json({
            message: 'Home details loading..',
            data: home
        })
    }, (err) => {
        res.send(err);
    });
};

// Handle update contact info
export let update = function (req, res) {

    let homeId = req.params.home_id;   
    let values = {
        name: _.get(req, 'body.name'),
        email: _.get(req, 'body.email'),
        phone: _.get(req, 'body.phone'),
        address: _.get(req, 'body.address')
    };
    let selector = {
        where: {
            homeid: homeId
        }
    };
    Home.update(values,selector).then(() => {
        res.json({
            message: 'Home Info updated',
            status:0
        })
    }, (err) => {
        res.send(err);
    });
};

// Handle delete contact
export let del = function (req, res) {

    let homeId = req.params.home_id;
    Home.destroy({
        where: {
            homeid: homeId
        }
    }).then(() => {
        res.json({
            status: 'success',
            message: 'Home deleted'
        })
    }, (err) => {
        res.send(err);
    });
};