let divheadLeft, divheadRight, divbox_base1, divbox_base2, divbox_base3, boxMod;

// head layout in html document

divheadLeft = document.getElementById('headleft');
divheadLeft.innerHTML = '<ul class="listLeftHead" id="listLeftHead"><li><a href="#">About</a></li><a href="#">Stor</a><li></li></ul>';
boxMod = '<div class="boxMod box_R_1" id="box_R_1"></div><div class="boxMod box_R_2" id="box_R_2"></div>';
divheadRight = document.getElementById('headRight');
divheadRight.innerHTML = boxMod;
