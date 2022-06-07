const dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    ["Hayk Ayvazyan","Front-end Developer","Yerevan","4532","26/01/2022","$230,000"],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]

];
  

  


  
  const titles = [ "Name","Position","Office","Extn.","Start Date","Salary"]

  
  class Table {
    
    constructor(datarArr,titlesArr,page,rowPerPage) { 
      this.originalData = datarArr;
      this.originalPage = page;
      this.root = document.querySelector("#root");
      this.SelectParent = document.getElementById('splice');
      this.page = page;
      console.log( "page " + this.page);
      this.rowsPerPage = rowPerPage;
      this.data = datarArr;
      this.titles = titlesArr;
      this.paginationWrapper = document.querySelector(".pagination-wrapper");
      this.table = null;
      this.thead = null;
      this.tbody = null;
      // this.textVal = null;
      this.searchDiv = document.querySelector("#search-div");
      this.resultSpan = null;
      this.input = document.querySelector("#input");
      this.buttonforSearch = document.querySelector(".button");
      this.tr = document.getElementsByTagName("tr");
      this.cub = document.querySelector(".pre-cub");
      this.spanForPageNumber = document.querySelector(".in-what-page");
      this.spanForPageNumber.textContent = this.page;
      // this.usersPageAndElseValue = document.querySelector(".usersPageAndElseValue");
      

      
      
      // Calling methods
      this.createUsersSelectOption();
      this.drawTable();
      this.drawTitles();
      this.drawContent();
      
      this.searching();
      this.sortUp();
      this.sortDown();
      // this.createPagination();
      this.selectRowPerPage();
      // this.selectRowPerPage();
     
    } 
    
   createUsersSelectOption(){
    // let usersPageAndElseValue = document.createElement("option");
    // usersPageAndElseValue.classList.add("usersPageAndElseValue");
    // usersPageAndElseValue.textContent = this.rowsPerPage;
    // this.SelectParent.appendChild(usersPageAndElseValue);
    let options = `
      <option value="${this.rowsPerPage}" class="usersPageAndElseValue">Your${this.rowsPerPage}</option> -->
      <option value="Select">Select</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    `
    console.log(this.SelectParent.innerHTML = options);


   }
  
    searching() {

      let countOfResults=0;
    
      this.input.addEventListener("input",()=>{
      this.loading();
      setTimeout(() => {
        this.clearLoadingDivParent();
      }, 700);
      this.clearPageCount();
      this.clearBodyContent();
      this.FixBugsAboutSelect();
      // this.rowsPerPage poxeluc chi poxvum Selecti arjeqy,
      //henc grum em this.SelectParent.value poxuma
      this.SelectParent.value = 'Select';
      console.log(this.rowsPerPage);
      

      setTimeout(() => {
        
        if(this.input.value != ""){
          let spanOfSearchDiv = document.createElement("span"); 
          this.searchDiv.appendChild(spanOfSearchDiv);
          spanOfSearchDiv.classList.add("result-span");
          this.resultSpan = document.querySelector(".result-span");
          this.resultSpan.innerHTML = "";
          this.tbody.innerHTML="";
          this.data.forEach(element=>{
            for (let i = 0; i < element.length; i++) {              
                if((element[i].toUpperCase()).includes(this.input.value.toUpperCase().trim())){
                  countOfResults+=1;
                  let tr = document.createElement("tr");
                  tr.classList.add("my-tr-for-data");
                  element.forEach(elem =>{  
                    let td = document.createElement("td");
                    td.textContent = element[i];
                    tr.appendChild(td); 
                    this.tbody.appendChild(tr);
                  })
                  break
                }
              }
              
          })
        }else{
          
            //Gjvanq es bageri dzery
            this.resultSpan.innerHTML="";
            let unnessSpans = document.querySelectorAll(".result-span");
            this.clearBodyContent();
            unnessSpans.forEach(element => element.remove());
            this.data = this.originalData;
            this.rowsPerPage = this.data.length;
            this.drawContent();
        }
            
            this.resultSpan.innerHTML = "";
            this.resultSpan.innerHTML+= `Found <span class="red-span">${countOfResults}</span> results`;
            countOfResults = 0;
            
      }, 700);
      this.data = this.originalData;
      
      })     
    };

    
    drawTable() {
        let tableElem = document.createElement("table");
        tableElem.classList.add("my-table");
        let theadElem = document.createElement("thead");
        theadElem.classList.add("my-thead");
        let loadingDivParent = document.createElement("div");
        loadingDivParent.classList.add("loading-div-parent");
        let tbodyElem = document.createElement("tbody");
        tbodyElem.classList.add("my-tbody");
        this.loadingDivParent =loadingDivParent;
        this.table = tableElem;
        this.thead = theadElem;
        this.tbody = tbodyElem;
        this.root.appendChild(tableElem);
        tableElem.appendChild(this.thead);
        tableElem.appendChild(this.loadingDivParent);
        tableElem.appendChild(this.tbody);
    };
  
    drawTitles() {
        let tr = document.createElement("tr");
        tr.classList.add("my-tr-for-titles");
        this.titles.forEach((element,index) => {
            let th = document.createElement("th");
            th.classList.add("my-th-for-titles");
            th.innerHTML =`
            <div>${element} 
            <button type="button" class="up-button-for-sorting">up</button>
            <button type="button" class="down-button-for-sorting">down</button>
            </div>
            `;
            tr.appendChild(th);
        });
        this.thead.appendChild(tr);
    };

     

    sortUp() {
     const upbtns = document.querySelectorAll(".up-button-for-sorting");
     upbtns.forEach((btn,index) =>{
      btn.addEventListener("click",()=>{
      this.page = 1;
      this.spanForPageNumber.textContent = 1;  
      this.input.value = "";
      if(this.resultSpan)this.resultSpan.innerHTML = "";
      this.clearUnnessSpans();
    
      if(Number(index)== Number(upbtns.length-1)){
         this.data.sort((a,b)=> {
          if(Number(a[index].replace("$","").split(",").join("")) < Number(b[index].replace("$","").split(",").join(""))) return -1
          else if(Number(a[index].replace("$","").split(",").join("")) > Number(b[index].replace("$","").split(",").join(""))) return 1
          else return 0
         } 
        );
        
      }else{
        this.data.sort((a,b)=> {
          if(a[index] < b[index]) return -1
          else if(a[index] > b[index]) return 1
          else return 0
            
        })
        
      }
      this.clearBodyContent();
      console.log(this.data);
      this.data = this.originalData;
      
      this.drawContent();
      // this.FixBugsAboutSelect();
      // this.clearPageCount();
      
        
      });
     });   
    };

    sortDown() {
    //  this.paginationWrapper.innerHTML = "";
     const downbtns = document.querySelectorAll(".down-button-for-sorting");
     downbtns.forEach((btn,index) =>{
      btn.addEventListener("click",()=>{
        this.page = 1;
        this.spanForPageNumber.textContent = 1; 
        this.input.value = "";
        this.clearUnnessSpans();
        if(Number(index)== Number(downbtns.length-1)){
          this.data.sort((a,b)=> {
           if(Number(a[index].replace("$","").split(",").join("")) > Number(b[index].replace("$","").split(",").join(""))) return -1
           else if(Number(a[index].replace("$","").split(",").join("")) < Number(b[index].replace("$","").split(",").join(""))) return 1
           else return 0
          } 
         );
          
       }else {
        this.data.sort((a,b)=> {
          if(a[index] > b[index]) return -1
          else if(a[index] < b[index]) return 1
          else return 0
        })
      }
      this.clearBodyContent();
      this.drawContent();
      });
     });
    }
    
    drawContent () {
    //   let options = document.getElementsByTagName("option");
    //  for (let i = 0; i < options.length; i++) {
    //    console.log(options[i].value);
       
    //  }
     if(this.SelectParent.value== "Select"){
       this.start = Number(0);
       this.end = this.data.length;
     }else if(this.rowsPerPage == 5 || this.rowsPerPage == 10 || this.rowsPerPage == 15 || this.rowsPerPage == 20  ) {
      this.start = Number(this.rowsPerPage * (this.page-1)) ;
      this.end = Number(this.rowsPerPage *(this.page));
     }
     else{
       console.log("else");
       
       this.start = Number(this.rowsPerPage * (this.page-1));
       this.end = Number(this.rowsPerPage *(this.page));

     }

      console.log(this.start);
      console.log(this.end);
       for( let i = this.start; i < this.end; i++) {
       let element = this.data[i];
       let tr =  document.createElement("tr");
       tr.classList.add("my-tr-for-data");
       if(element){
         element.forEach(elem => {
           let td = document.createElement("td");
           td.textContent = elem;
           tr.appendChild(td);
       });
       this.tbody.appendChild(tr);
      }
    }
     
      
    }; 


    clearBodyContent() {
      this.tbody.innerHTML = "";
    };

    createPagination() {
      const pageCount = Math.ceil(this.data.length / this.rowsPerPage);
      this.paginationWrapper.innerHTML = "";
      for (let i = 0; i < pageCount; i++) {
        const cub = document.createElement("div");
        cub.textContent = i + 1;
        cub.classList.add("pre-cub");
        this.paginationWrapper.appendChild(cub);
        cub.addEventListener("click", (e) => {
        this.page = e.target.textContent;
        this.spanForPageNumber.textContent = this.page;
        
          this.clearBodyContent();
          this.drawContent();
        
        });
    }
    };
    selectRowPerPage (e) {
      if(e){
      if(e.target.value != "Select"  ) {
        this.page = 1;
        this.spanForPageNumber.textContent = 1;
        this.rowsPerPage = Number(e.target.value);
        console.log(this.rowsPerPage +"aaa");
        this.clearBodyContent(); 
        this.drawContent();
        this.createPagination();

      }
      else {
       this.clearBodyContent();
        this.data = this.originalData;
        this.rowsPerPage = this.data.length;
        this.paginationWrapper.innerHTML = "";
        this.drawContent();
        this.clearPageCount();
      }
      this.input.value ="";
      this.clearUnnessSpans();
    }
    else{
      this.clearBodyContent(); 
      this.createPagination();
      this.drawContent();

    }
      
     
    };

    FixBugsAboutSelect() {
      this.paginationWrapper.innerHTML="";
      this.rowsPerPage="Select";
    };


clearPageCount() {
  this.spanForPageNumber.textContent = "..."
    };


clearLoadingDivParent() {
    if(this.loadingDivParent) this.loadingDivParent.innerHTML=""
    };

loading() {
  this.clearLoadingDivParent();
  const loadingDiv = document.createElement("div");
  loadingDiv.classList.add("loadingDiv");
  this.loadingDivParent.appendChild(loadingDiv);
  console.log(loadingDiv);
};

clearUnnessSpans(){
      if(this.resultSpan)this.resultSpan.innerHTML=""
      let unnessSpans = document.querySelectorAll(".result-span");
            unnessSpans.forEach(element => element.remove());
};

};


  const obj = new Table(dataSet,titles,2,7);
  
  console.log(obj);


//   let a = {
//     name: "asd",
//     surname:"dsa",
//     baby:"bbyy",
//     go: function() {alert(this.name)},
//     goBaby() {alert(this.surname)},
//     goHomeBaby: () =>{ alert(this.baby)}
    
//   };
 
// alert(false==0)



