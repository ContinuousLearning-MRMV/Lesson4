const MRMVLib=[
{
    modelId:1,
    modelName:"ALLL",
    activities:[
        {
            type:"validation",
            conclusion:"pass",
            start:new Date(2016, 10, 1),
            end:new Date(2017, 1, 1),
            issues:[
                {
                    severity:"high",
                    description:"there was a problem",
                    remediateBy:new Date(2018, 1, 1),
                    closedDate:null
                }
            ]
        }
    ]
},
{
    modelId:2,
    modelName:"MarketVaR",
    activities:[
        {
            type:"validation",
            conclusion:"pass",
            start:new Date(2016, 10, 1),
            end:null,
            
        }
    ]
}


];

//returns everything for "alll"
console.log(MRMVLib.filter((model)=>{
    return model.modelName==='ALLL';
}));

//returns everything from where an activity has happened since November 2016 (js is 0 based)
console.log(MRMVLib.filter((model)=>{
    return model.activities.filter((activity)=>{
        return activity.end>new Date(2016, 10, 1);
    }).length>0;
}));

//returns total number of issues
console.log(MRMVLib.reduce((aggr, model)=>{
    return aggr+model.activities.reduce((aggr1, activity)=>{
        return aggr1+activity.issues?activity.issues.length:0;
    }, 0);
}, 0));

//returns total number of high issues
console.log(MRMVLib.reduce((aggr, model)=>{
    return aggr+model.activities.reduce((aggr1, activity)=>{
        return aggr1+activity.issues?activity.issues.filter((issue)=>{
            return issue.severity==='high'
        }).length:0;
    }, 0);
}, 0));