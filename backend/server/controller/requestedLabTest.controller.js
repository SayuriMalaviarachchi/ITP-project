var requestedLabTest = require('../model/requestedLabTest.model');

// create and save new category
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new category
    
    const requestedLabTestData = new requestedLabTest({
        test_name : req.body.test_name,
        requested_user_name:req.body.requested_user_name,
        requested_user_contact_number:req.body.requested_user_contact_number,
        requested_date:req.body.requested_date,
        status: "PENDING"
    })

    // save category in the database
    requestedLabTestData
        .save(requestedLabTestData)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create Bill  operation"
            });
        });

}

//retrive and return all categories/retive a single category'
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;
        const pipeline = [
            {
                $lookup: {
                    from: "labTest",
                    localField: "test_data",
                    foreignField: "_id",
                    as: "labTest",
                },
            },
            {
                $unwind: {
                    path: "$labTest",
                    preserveNullAndEmptyArrays: true,
                },
            },
        ];
        requestedLabTest.aggregate(pipeline)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"not found Bill  with id" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retriving Bill  with id" +id})
        })
    }else{
        const pipeline = [
            {
                $lookup: {
                    from: "labTest",
                    localField: "test_data",
                    foreignField: "_id",
                    as: "labTest",
                },
            },
            {
                $unwind: {
                    path: "$labTest",
                    preserveNullAndEmptyArrays: true,
                },
            },
        ];
        requestedLabTest.aggregate(pipeline)
        .then(biilT => {
            res.send({data: biilT})
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error on retriving Bill "})
        })
    }
}

//update a new identify user by user id
exports.update = (req,res) => {
    if(!req.body){
        return res
                .status(400)
                .send({message:"Data to update can not be empty"})
    }

    const id  = req.body.id;
    requestedLabTest.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"bill is not found"});
        }else{
            res.send(data);
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while updateting"})
    })
}

//Delete a user with specified user id in the request
exports.delete = (req,res) => {
    const id  = req.body.id;

    requestedLabTest.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`cannot Delete bill with $(id). Maybe bill Type not found`});
        }
        else{
            res.send({message:"bill Type was deleted"});
        }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while Deleting" });
    });
};
