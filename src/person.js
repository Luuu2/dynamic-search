console.log("person.js is running!");

const isAdult = (age) =>{
	if (age>=18){
		return true;
	}
	else if(age<18){
		return false;
	}
};

const canDrink = (age) =>{
	if (age>=21){
		return true;
	}
	else if(age<21){
		return false;
	}
};

const isSenior = (age) =>{
	if (age>=64){
		return true;
	}
	else if(age<64){
		return false;
	}
};

export{isAdult, canDrink,isSenior as default };