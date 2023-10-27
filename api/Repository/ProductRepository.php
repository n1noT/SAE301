<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Product.php");


/**
 *  Classe ProductRepository
 * 
 *  Cette classe représente le "stock" de Product.
 *  Toutes les opérations sur les Product doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class ProductRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id): ?Product{
        /*
            La façon de faire une requête SQL ci-dessous est "meilleur" que celle vue
            au précédent semestre (cnx->query). Notamment l'utilisation de bindParam
            permet de vérifier que la valeur transmise est "safe" et de se prémunir
            d'injection SQL.
        */
        $requete = $this->cnx->prepare("select * from Product where id_product=:value"); // prepare la requête SQL
        $requete->bindParam(':value', $id); // fait le lien entre le "tag" :value et la valeur de $id
        $requete->execute(); // execute la requête
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer==false) return null; // may be false if the sql request failed (wrong $id value for example)
        
        $p = new Product($answer->id_product);
        $p->setName($answer->name);
        $p->setPrice($answer->price);
        $p->setImage($answer->image);
        $p->setSize($answer->size);    
        $p->setSauce($answer->sauce);    
        $p->setIce($answer->ice);    
        $p->setCream($answer->cream);
        $p->setIdcategory($answer->category);
        $p->setStock($answer->stock);
        return $p;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("select * from Product");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Product($obj->id_product);
            $p->setName($obj->name);
            $p->setPrice($obj->price);
            $p->setImage($obj->image);    
            $p->setSize($obj->size);    
            $p->setSauce($obj->sauce);    
            $p->setIce($obj->ice);    
            $p->setCream($obj->cream);    
            $p->setIdcategory($obj->category);
            $p->setStock($obj->stock);
            array_push($res, $p);
        }
       
        return $res;
        
    }

    public function findAllByCategory($cat): array {
        $requete = $this->cnx->prepare("select * from Product where category=:value");
        $requete->bindParam(':value', $cat);
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Product($obj->id_product);
            $p->setName($obj->name);
            $p->setPrice($obj->price);
            $p->setImage($obj->image); 
            $p->setSize($obj->size);    
            $p->setSauce($obj->sauce);    
            $p->setIce($obj->ice);    
            $p->setCream($obj->cream);       
            $p->setIdcategory($obj->category);
            $p->setStock($obj->stock);
            array_push($res, $p);
        }
       
        return $res;
        
    }

    public function save($product){
        $requete = $this->cnx->prepare("insert into Product (name, category) values (:name, :idcategory)");
        $name = $product->getName();
        $idcat = $product->getIdcategory();
        $requete->bindParam(':name', $name );
        $requete->bindParam(':idcategory', $idcat);
        $answer = $requete->execute(); // an insert query returns true or false. $answer is a boolean.

        if ($answer){
            $id = $this->cnx->lastInsertId(); // retrieve the id of the last insert query
            $product->setId($id); // set the product id to its real value.
            return true;
        }
          
        return false;
    }

    public function delete($id){
        // Not implemented ! TODO when needed !
        return false;
    }

    public function update($product){
        // Not implemented ! TODO when needed !
        return false;
    }

   
    
}