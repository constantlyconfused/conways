var grid = [];
var scells = [];
var gridsize=30;
var cellsize=20;

function setup() {
	createCanvas(gridsize*cellsize, gridsize*cellsize);
	background(51);
	frameRate(24);
	for(var i=0; i<gridsize; i++){
		grid[i] = []
		for (var j=0; j<gridsize; j++){
			if (random(0,2)<=1){
				grid[i][j] = false; //setting each grid value to false
			}else{
				grid[i][j] = true;
			}
		}
	}
	
 	for(var i=0; i<gridsize; i++){
		for (var j=0; j<gridsize; j++){
			if (grid[i][j] == true){ //setting each grid value to false
				fill(255);
				rect(i*cellsize, j*cellsize, cellsize, cellsize);
			}
		}
	} 
	
}

function draw() {
	var newgrid = []
	for(var i=0; i<gridsize; i++){
		newgrid[i] = [];
		for (var j=0; j<gridsize; j++){
			newgrid[i][j] = grid[i][j];
		}
	}
	
	//Filling the grid with current states
	for(var i=0; i<gridsize; i++){
		for (var j=0; j<gridsize; j++){
			count = neighbours(i,j);
			if (grid[i][j] == true){ //If the cell value is true
				fill(255);
				rect(i*cellsize, j*cellsize, cellsize, cellsize);
				
				if (count>3) newgrid[i][j]=false;
				if (count<2) newgrid[i][j]=false;
			}else{
				fill(51);
				rect(i*cellsize, j*cellsize, cellsize, cellsize);
				
				if (count==3) newgrid[i][j]=true;
			}
		}
	}
	
	
	
	grid = newgrid;
	
}

function neighbours(x,y){
	var count = 0;
	
	for (i=-1; i<2; i++){
		for (j=-1; j<2;j++){
			if (i==0&&j==0) continue;
			try{
				print(grid[x+i][y+j])
			}catch(TypeError){
				continue;
			}
			if (grid[x+i][y+j]==true) count++;
		}
	}
	return count;
}
