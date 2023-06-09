// 'use strict';

// /* ===== Enable Bootstrap Popover (on element  ====== */

// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })

// /* ==== Enable Bootstrap Alert ====== */
// var alertList = document.querySelectorAll('.alert')
// alertList.forEach(function (alert) {
//   new bootstrap.Alert(alert)
// });


/* ===== Responsive Sidepanel ====== */

 



window.addEventListener('load', function(){
	responsiveSidePanel(); 
});

window.addEventListener('resize', function(){
	responsiveSidePanel(); 
	chartSum();
});


export function responsiveSidePanel() {
	const sidePanel = document.getElementById('app-sidepanel'); 
    let w = window.innerWidth;
	if(w >= 1200) {
	    // if larger 
	    //console.log('larger');
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');
		
	} else {
	    // if smaller
	    //console.log('smaller');
	    sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');
	}
};
// const sidePanelToggler = document.getElementById('sidepanel-toggler'); 
export function sidePanelToggler(){
	const sidePanel = document.getElementById('app-sidepanel'); 
	if (sidePanel.classList.contains('sidepanel-visible')) {
		console.log('visible');
		sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');
		
	} else {
		console.log('hidden');
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');
	}
}
// const sidePanelClose = document.getElementById('sidepanel-close'); 
export function sidePanelClose(e){
	e.preventDefault();
	sidePanelToggler();
}

// const sidePanelDrop = document.getElementById('sidepanel-drop'); 
// sidePanelToggler();





/* ====== Mobile search ======= */


// const searchMobileTrigger = document.querySelector('.search-mobile-trigger');
export function searchMobileTrigger(){
	
	const searchBox = document.querySelector('.app-search-box');
	searchBox.classList.toggle('is-visible');
	
	let searchMobileTriggerIcon = document.querySelector('.search-mobile-trigger-icon');
	
	if(searchMobileTriggerIcon.classList.contains('fa-search')) {
		searchMobileTriggerIcon.classList.remove('fa-search');
		searchMobileTriggerIcon.classList.add('fa-times');
	} else {
		searchMobileTriggerIcon.classList.remove('fa-times');
		searchMobileTriggerIcon.classList.add('fa-search');
	}
}

export function chartSum(){
	if(window.innerWidth <= 992)
	document.getElementById('cardSum').classList.add('col-sm-4');
	else
	document.getElementById('cardSum').classList.remove('col-sm-4');
}

export function changeActiveLink(value){
	var inputs = document.getElementsByName("link");
	for (var i = 0; i < inputs.length; i++) {
		
		if (inputs[i].classList.contains("active")) {
			inputs[i].classList.remove("active");
		}
	  }
	  
	  sessionStorage.setItem("myElementClass", value);
}

export function getChangeActiveLink(value){
	console.log("load", value)
	var savedClass = sessionStorage.getItem("myElementClass");
	var inputs = document.getElementsByName("link");

	// Thay đổi tên lớp của phần tử nếu tên lớp đã được lưu trữ trước đó
	if (savedClass) {
		
		if(value == parseInt(savedClass))
		inputs[value].classList.add("active");
		  
	
	}
	else
	{
		inputs[0].classList.add("active");

	}

}
