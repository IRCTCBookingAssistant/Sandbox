"use strict";
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var dim = 0;
var matrix;

var processInput = function(input) {
	var inputItems = input.split(/[\s ]+/);
	var index1, index2,index3;
	dim = Number(inputItems[0]);
	index3 = 1;
	matrix = [dim];
	for(index1 = 0; index1 < dim; index1+=1) {
		matrix[index1] = [index2];
		for(index2 = 0; index2 < dim; index2+=1) {
			matrix[index1][index2] = Number(inputItems[index3]);
			index3 += 1;
		}
	}
};

var processFunctionality = function()
{
	var result = true;
	var sum = 0;
	var rowSum, colSum, frontDiaSum, backDiaSum;
	var index1, index2;

    /*process.stdout.write('Dim: '+dim+"\n");
    for(index1 = 0; index1 < dim; index1 += 1) {
    	for(index2 = 0; index2 < dim; index2 += 1) {
    		process.stdout.write('Matrix['+index1+']['+index2+'] ='+matrix[index1][index2]+"\n'");
    	}
    }*/

    frontDiaSum = 0;
    backDiaSum = 0;
    for(index1= 0; index1 < dim; index1 +=1){
    	frontDiaSum += matrix[index1][index1];
    	backDiaSum += matrix[index1][dim-1-index1];
    }

    if(sum === 0) {
    	sum = frontDiaSum;
    }
    
    if(sum !== backDiaSum) {
    	result = false;
    }
    
    for(index1 = 0; index1 < dim && result === true; index1 += 1) {
    	rowSum = 0;
    	colSum = 0;
    	for(index2 = 0; index2 < dim; index2 += 1) {
    		rowSum += matrix[index1][index2];
    		colSum += matrix[index2][index1];
    	}
    
    	if(sum !== rowSum || sum !== colSum) {
    		result = false;
    		break;
    	}
    }
    return result;
};

process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    processInput(input);
    var result = processFunctionality() ? 'magic matrix' : 'bad matrix';
    process.stdout.write(result);
});