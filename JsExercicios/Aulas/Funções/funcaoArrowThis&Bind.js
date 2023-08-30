let compareThis =  function(param){
    console.log(this===param);
}
compareThis(global);

const Obj = {}
compareThis = compareThis.bind(Obj);
compareThis(global);
compareThis(Obj);

let compareThisArrow = param2 => console.log(this===param2);
compareThisArrow(module.exports);
compareThisArrow(global);

compareThisArrow = compareThisArrow.bind(Obj);
compareThisArrow(Obj);//Arrow function é mais forte que o bind. O this não muda mesmo sendo bindado ao Obj
compareThisArrow(module.exports);