function createnewcompany(){
  createbrandfolder();
}

function testtest(){
  //DocumentApp.create("The Store: Marketing Strategy");
  var thefile=DriveApp.getFileById("1-kVRRwD9F2ub38K8eCoNzFZxiwzNJc5NFK-1Zbjwi9I");
  Logger.log(thefile.getMimeType());
}

  
function create_new_company_folder_structure(){
  
  
  //Insert name of company
  var newcompname = "Ottity";
  
  //Create Root Directory
  var newcompfolder=DriveApp.createFolder(newcompname);
  
  
  //Create Legal Directory
  var legalfolder=newcompfolder.createFolder(newcompname+": 0. Legal");
  legalfolder.createFolder("Legal Templates");
  legalfolder.createFolder("Contracts");
  
  
  
  //Create Admin Directory
  var adminfolder=newcompfolder.createFolder(newcompname+": 1. Company Stack");
  var adminsubfolder=["Logo", "About Us", "Publication Kit", "Branding Guideline", "Investors' Deck"];
  
  for (var i=0; i<adminsubfolder.length;i++){
    var counter = i+1;
    adminfolder.createFolder(counter+". "+adminsubfolder[i]);
  }
  
  
  //Create Accounting Directory
  var accountingfolder=newcompfolder.createFolder(newcompname+": 2. Accounting");
  accountingfolder.createFolder("Receipts");
  
     
  //Create Supplier Directory
  var suppliersfolder=newcompfolder.createFolder(newcompname+": 3. Suppliers");
  
     /*Brand Specific*/
  
  //Create Supplier/Brand Sub-Directory
  var inputsupplier= "First Supplier Test";
  
  var supfold=suppliersfolder.createFolder(inputsupplier);
    
  //Supplier's Admin Folder
  var suppliersadmin=supfold.createFolder(inputsupplier+": 1. Admin");
  var suppliersadminsubfolders=["Contact","Contracts","Quotations","Invoices/Recipts"];
  
  for (var i=0; i<suppliersadminsubfolders.length; i++){
    var counter = i+1;
    suppliersadmin.createFolder(counter+". "+suppliersadminsubfolders[i]);
  }

  //Supplier's Marketing Materials
  var suppliersmarketingmaterials=supfold.createFolder(inputsupplier+": 2. Marketing Materials");
  var suppliersmarketingmaterialssubfolders=["Logo","Brand Stories/Information","Marketing Guideline","Design Assets","Promotional Materials"];
  
  for (var i=0; i<suppliersmarketingmaterialssubfolders.length; i++){
    var counter = i+1;
    suppliersmarketingmaterials.createFolder(counter+". "+suppliersmarketingmaterialssubfolders[i]);
  }
  
   
  //Supplier's Retail/Sales Folder
  var suppliersretailsales=supfold.createFolder(inputsupplier+": 3. Retail/Sales");
  var suppliersretailsalessubfolders=["Product Images","Product Labels"];
  

    sub1=suppliersretailsales.createFolder("1. "+suppliersretailsalessubfolders[0]);
    sub1.createFolder("2. Optimized for Web");
    sub1.createFolder("1. Source");
    sub1.createFolder("3. Misc");
    
    sub2=suppliersretailsales.createFolder("2. "+suppliersretailsalessubfolders[1]);
    sub2.createFolder("1. HK Law Complied");
    sub2.createFolder("2. Source");
    sub2.createFolder("3. Misc");
    


  
  
  
  
  //Supplier's Misc Folder
  var suppliersmisc=supfold.createFolder(inputsupplier+": 4. Misc");
  
  //Supplier's Incoming Source Files
  var suppliersource=supfold.createFolder(inputsupplier+": 5. Incoming Source Files");

  
  /*End of Brand Specific*/
  

  
  
  
  //Create Marketing Directory
  var marketingfolder=newcompfolder.createFolder(newcompname+": 4. Marketing");
//  var marketingstrategy=DocumentApp.create(newcompname+": Marketing Strategy");
//  marketingstrategy.makeCopy(marketingfolder);
//  marketingstrategy.setTrashed(true);
  var marketingsubfolders=["Facebook","Instagram","Twitter","Snapchat","Youtube","Pinterest","Whatsapp","WeChat"];
  
  
  for (var i=0; i<marketingsubfolders.length; i++){
    
    marketingfolder.createFolder("Social media: "+marketingsubfolders[i]);
  }
      
}



function create_new_brand(){

  
    //Create Supplier/Brand Sub-Directory
  var inputsupplier= "Bulletproof";
  
  var suppliersfolder = DriveApp.createFolder(inputsupplier);
    
  //Supplier's Admin Folder
  var suppliersadmin=suppliersfolder.createFolder(inputsupplier+": 1. Admin");
  var suppliersadminsubfolders=["Contracts","Quotations","Invoices/Recipts"];
  
  for (var i=0; i<suppliersadminsubfolders.length; i++){
    var counter = i+1;
    suppliersadmin.createFolder(counter+". "+suppliersadminsubfolders[i]);
  }

  //Supplier's Marketing Materials
  var suppliersmarketingmaterials=suppliersfolder.createFolder(inputsupplier+": 2. Marketing Materials");
  var suppliersmarketingmaterialssubfolders=["Logo","Brand Stories/Information","Design Assets","Promotional Materials"];
  
  for (var i=0; i<suppliersmarketingmaterialssubfolders.length; i++){
    var counter = i+1;
    suppliersmarketingmaterials.createFolder(counter+". "+suppliersmarketingmaterialssubfolders[i]);
  }
  
   
  //Supplier's Retail/Sales Folder
  var suppliersretailsales=suppliersfolder.createFolder(inputsupplier+": 3. Retail/Sales");
  var suppliersretailsalessubfolders=["Product Images","Product Labels"];
  
  sub0=suppliersretailsales.createFolder("0. Product Shopify CSV");
  //Need to create the actual CSV file with Google Sheet with certain format **missing**
  
  sub1=suppliersretailsales.createFolder("1. "+suppliersretailsalessubfolders[0]);
  sub1.createFolder("2. Optimized for Web");
  sub1.createFolder("1. Source");
  sub1.createFolder("3. Misc");
  
  sub2=suppliersretailsales.createFolder("2. "+suppliersretailsalessubfolders[1]);
  sub2.createFolder("1. HK Law Complied");
  sub2.createFolder("2. Source");
  sub2.createFolder("3. Misc");
    


  
  
  
  
  //Supplier's Misc Folder
  var suppliersmisc=suppliersfolder.createFolder(inputsupplier+": 4. Misc");
  
  //Supplier's Incoming Source Files
  var suppliersource=suppliersfolder.createFolder(inputsupplier+": 5. Incoming Source Files");

  
  /*End of Brand Specific*/
  
}
  
  


   
    
  