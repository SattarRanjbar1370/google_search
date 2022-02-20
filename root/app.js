let divheadLeft, divheadRight, divbox_base1, divbox_base2, divbox_base3, boxMod;
let divHeadBoxR1, divHeadBoxR2, R_1, R_2;
// head layout in html document

divheadLeft = document.getElementById('headleft');
divheadLeft.innerHTML = '<ul class="listLeftHead" id="listLeftHead"><li><a href="#">About</a></li><li><a href="#">Store</a></li></ul>';
boxMod = '<div class="boxMod box_R_1" id="box_R_1"></div><div class="boxMod box_R_2" id="box_R_2"></div>';

// head layout in html box right header

divheadRight = document.getElementById('headRight');
divheadRight.innerHTML = boxMod;
divHeadBoxR1 = '<ul><li><a href="#">Gmail</a></li><li><a href="#">Image</a></li></ul>';
divHeadBoxR2 = '<ul><li><a href="#"><img src=""></img></a></li><li><a href="#"><img src=""></img></a></li></ul>';
R_1 = document.getElementById('box_R_1');
R_1.innerHTML = divHeadBoxR1;
R_2 = document.getElementById('box_R_2');
R_2.innerHTML = divHeadBoxR2;