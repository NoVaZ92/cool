/*function addRow(elmt, value)
{
    var tr = document.createElement('tr');
    elmt.appendChild(tr);
     
    var td = document.createElement('td');
    tr.appendChild(td);
    var tdText = document.createTextNode(value);
    td.appendChild(tdText);

    // On assemble les cellules a la ligne
    TR.appendChild(TD1);
    TR.appendChild(TD2);

    // On assemble la ligne au tableau
    document.getElementById ('tableau').appendChild (TR);
}*/
function addRow (elmt,value,value2,value3,value4,value5,value6,value7,value8,value9,value10)
{
    
    // Création de la ligne
    TR = document.createElement ("tr");
	
    // Création de la première cellule
    TD1  = document.createElement ("td");
    TXT1 = document.createTextNode (value);
    TD1.appendChild (TXT1);
	
    // Création de la deuxième cellule
    TD2  = document.createElement ("td");
    TXT2 = document.createTextNode (value2);
    TD2.appendChild (TXT2);
    
        // Création de la troisième cellule
    TD3  = document.createElement ("td");
    TXT3 = document.createTextNode (value3);
    TD3.appendChild (TXT3);
	    
        // Création de la quatrième cellule
    TD4  = document.createElement ("td");
    TXT4 = document.createTextNode (maintenant);
    TD4.appendChild (TXT4);
	    
        // Création de la cinquième cellule
    TD5  = document.createElement ("td");
    TXT5 = document.createTextNode (value5);
    TD5.appendChild (TXT5);   
    
        // Création de la sixième cellule
    TD6  = document.createElement ("td");
    TXT6 = document.createTextNode (value6);
    TD6.appendChild (TXT6);    
        // Création de la septième cellule
    TD7  = document.createElement ("td");
    TXT7 = document.createTextNode (value7);
    TD7.appendChild (TXT7);
	    
        // Création de la huitième cellule
    TD8  = document.createElement ("td");
    TXT8 = document.createTextNode (value8);
    TD8.appendChild (TXT8);

        // Création de la neuvième cellule
    TD9  = document.createElement ("td");
    TXT9 = document.createTextNode (value9);
    TD9.appendChild (TXT9);
	
        // Création de la dixième cellule
    TD10  = document.createElement ("td");
    TXT10 = document.createTextNode (value10);
    TD10.appendChild (TXT10);
	
    // On assemble les cellules a la ligne
    TR.appendChild(TD1);
    TR.appendChild(TD2);
    TR.appendChild(TD3);
    TR.appendChild(TD4);
    TR.appendChild(TD5);
    TR.appendChild(TD6);
    TR.appendChild(TD7);
    TR.appendChild(TD8);
    TR.appendChild(TD9);
    TR.appendChild(TD10);
    

    // On assemble la ligne au tableau
    document.getElementById ('tableau').appendChild (TR);
}


var maintenant=new Date();
var jour=maintenant.getDate();
var mois=maintenant.getMonth()+1;
var an=maintenant.getFullYear();
