var labTest = require('../model/labTest.model');

// create and save new category
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new category
    
    const labTestData = new labTest({
        test_name : req.body.test_name,
        test_description : req.body.test_description,
        purpose:req.body.purpose,
        preparation:req.body.preparation,
        timing:req.body.timing,
        price : req.body.price,
    })

    // save labtests in the database
    labTestData
        .save(labTestData)//method of save to db
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create labTest  operation"
            });
        });

}

//retrive and return all categories/retive a single category-get
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        labTest.findById(id)
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
        labTest.find()
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
    labTest.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"labTest is not found"});
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
    const id  = req.params.id;

    labTest.findByIdAndDelete(id)
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
