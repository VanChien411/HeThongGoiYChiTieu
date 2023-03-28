import CreatePlan from './createPlan';
import ChartType from './table/chartType';



function Home(){


  
    return(
        <div class="app-wrapper">
	    <p>s</p>
	    <div class="app-content pt-3 p-md-3 p-lg-4">
		    <div class="container-xl">
			    
			    <h1 class="app-page-title">Kế hoạch hoạt động</h1>
				<h1 class='text-center'>KẾ HOẠCH HOẠT ĐỘNG</h1>
				<div class='row mt-4'>
					<div class='col-lg-12 row'>
						<CreatePlan />
					</div>
					<div class='col-12 col-sm-8 col-lg-3 ' id='cardSum'>
					
						
					</div>
				</div>
				<div class='col-6'>
				<ChartType />
				</div>
			
			  
			    
		    </div>{/*//container-fluid*/}
	    </div>{/*//app-content*/}
	    
	   
	    {/*//app-wrapper*/}    
    </div>	
    
    );
}

export default Home;