// console.log(trees[5].name);



const treeGallery = document.getElementById("tree-gallery");

trees.forEach(function(tree){
    const treeDiv = document.createElement("div");
    treeDiv.setAttribute("class", "tree");

    const treeName = document.createElement("h2");
    treeName.textContent = tree.name;
    treeDiv.appendChild(treeName);
    
    const treeImage = document.createElement("img");
    treeImage.setAttribute("src", tree.imagePath);
    treeDiv.appendChild(treeImage);


    treeGallery.appendChild(treeDiv);

});  