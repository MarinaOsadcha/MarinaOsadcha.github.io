//------------------------------------
//arrow UP
var arrowUp = document.getElementById('arrowUp'); 
var width = document.documentElement.clientWidth;
	window.onscroll = function() {
		var pageY = window.pageYOffset || document.documentElement.scrollTop;    //прокрутка вниз в пикселях
		if (pageY > 200 && width >= 950) {
			arrowUp.style.display = 'inline-block';
			arrowUp.style.opacity = 1;
		}
		if (pageY < 200 || width <= 950) {
			arrowUp.style.display = 'none';
			arrowUp.style.opacity = 0;
		}
	};
//-------------------------------------
//navicon + sidebar
window.onload = function() {
	var navicon = document.getElementById('navicon');
	var sidebar = document.getElementById('sidebar');
	var wrapper = document.getElementById('wrapper');
	var moveLayout = document.getElementById('moveLayout');
	var count = 0;
	
	moveLayout.style.transition = 0.5 + 's';
	
	if (navicon != null) {
		navicon.style.color = 'rgb(88,77,57)'; //on this page navigon is grey
		sidebar.style.background = 'rgba(250,250,250,1)';  //on this page sidebar is white
						
		function toClickNavicon() {
			count++;
			if (count % 2 != 0) {
				sidebar.style.left = 0;
				moveLayout.style.marginLeft = 200 + 'px'
				wrapper.style.opacity = 0.2;
				navicon.style.color = 'rgb(250,250,250)';
				document.body.style.overflow = 'hidden';
			} 
			if (count % 2 == 0) {
				sidebar.style.left = -200 + 'px';
				moveLayout.style.marginLeft = 0;
				wrapper.style.opacity = 1;
				navicon.style.color = 'rgb(88,77,57)';
				document.body.style.overflow = 'auto';
			}
		}
	};
	navicon.onclick = toClickNavicon;
};
//----------------------------------------
//slider for gallery
/*add div.#slider + id modalPicture to div.gallery*/
var slider = document.getElementById('slider');
	if (slider != null) {
		var modalPicture = document.getElementById('modalPicture');
		var galleryUl = document.getElementById('galleryUl');
		var back = document.getElementById('back');
		var forward = document.getElementById('forward');
		var content = document.getElementById('content');
		var slider_count = 0;
		var pic_width = 850;    //width of li
		var item;				//for vertical pic
		var idLi;
		
	function toShowSlider(event) {
		var target = event.target;
		if (target.className == 'slider_pic' || target.className == 'slider_pic vertical') {
			slider_count = +event.target.id;    //start from a linked pic 
						
			item = document.getElementById(slider_count);   //if pic is vertical - change it's width to 50%
			idLi = '0' + slider_count;
			if (item.className == 'slider_pic vertical') {
				var vertical = document.getElementById(idLi);
				vertical.firstElementChild.style.width = 50 + '%';
			}
			
			if (slider_count == 0) { 
				galleryUl.style.marginLeft = galleryUl.style.marginLeft;
			} else {
				galleryUl.style.marginLeft = -(pic_width*slider_count) + 'px';
			}
			content.lastElementChild.innerHTML = document.getElementById(idLi).lastElementChild.getAttribute('alt');
			slider.style.display = 'block';
			document.body.style.overflow = 'hidden';
		}
	};
	function toForward() {
		if (slider_count <=10) {	
		//if pic is vertical - change it's width
			slider_count = slider_count + 1;
			item = document.getElementById(slider_count);
			idLi = '0' + slider_count;
			
			if (item.className == 'slider_pic vertical') {
				var vertical = document.getElementById(idLi);
				vertical.firstElementChild.style.width = 50 + '%';
			}
			//till the last pic of ul
			galleryUl.style.marginLeft = -(pic_width*slider_count) + 'px';
			content.lastElementChild.innerHTML = document.getElementById(idLi).lastElementChild.getAttribute('alt');
		} else {
			galleryUl.style.marginLeft = galleryUl.style.marginLeft;
			content.lastElementChild.innerHTML = document.getElementById(idLi).lastElementChild.getAttribute('alt');
		}
	};
	forward.onclick = toForward;
			
	function toBack() {
		if (slider_count == 0) {	//first pic, no back move
			galleryUl.style.marginLeft = galleryUl.style.marginLeft;
			content.lastElementChild.innerHTML = document.getElementById(idLi).lastElementChild.getAttribute('alt');
		} else {
			slider_count = slider_count - 1;
			item = document.getElementById(slider_count);
			idLi = '0' + slider_count;
			if (item.className == 'slider_pic vertical') {
				var vertical = document.getElementById(idLi);
				vertical.firstElementChild.style.width = 50 + '%';
			}
			galleryUl.style.marginLeft = - (pic_width*slider_count) + 'px';
			content.lastElementChild.innerHTML = document.getElementById(idLi).lastElementChild.getAttribute('alt');
		}
	};
	back.onclick = toBack;
	modalPicture.onclick = toShowSlider;
	
	function toClosePicture() {    //обработчик на Х (спрятать slider)
		slider_count = 0;
		slider.style.display = 'none';
		document.body.style.overflow = 'auto';
	};
}