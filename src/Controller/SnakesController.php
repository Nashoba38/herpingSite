<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Snakes;

class SnakesController extends AbstractController
{
    /**
     * @Route("/api/snakesDetails", name="snakesDetails")
     */
    public function index()
    {
        $snakesArray = [];
        $snakes = $this->getDoctrine()->getRepository(Snakes::class);
        $snakesEntities = $snakes->findAll();
        

        for ($i=0; $i < count($snakesEntities); $i++) { 
            $snake = $snakesEntities[$i];
            $id = $snake->getId();
            $FrenchName = $snake->getFrenchName();
            $LatinName = $snake->getLatinName();
            $Image = $snake->getImage();
            $taille = $snake->getTaille();
            $Description = $snake->getDescription();
            $nourriture = $snake->getNourriture();
            $distribution = $snake->getDistribution();
            $habitat = $snake->getHabitat();
            $comportement = $snake->getComportement();
            $reproduction = $snake->getReproduction();

            $snakeArray = [
                "id" => $id,
                "FrenchName" => $FrenchName,
                "LatinName" => $LatinName,
                "Image" => $Image,
                "Taille" => $taille,
                "Description" => $Description,
                "Nourriture" => $nourriture,
                "Distribution" => $distribution,
                "Habitat" => $habitat,
                "Comportement" => $comportement,
                "Reproduction" => $reproduction,

            ];
            $snakesArray[] = $snakeArray; //équivaut push en JS
        }
        
        return new JsonResponse($snakesArray);

    }

    /** 
     * @Route("/api/snakesDetails/{id}", name="OneSnakeDetail")
    */
    public function getSnakeById($id) {
       
        $snake = $this->getDoctrine()->getRepository(Snakes::class)->find($id);
        $id = $snake->getId();
        $FrenchName = $snake->getFrenchName();
        $LatinName = $snake->getLatinName();
        $Image = $snake->getImage();
        $taille = $snake->getTaille();
        $Description = $snake->getDescription();
        $nourriture = $snake->getNourriture();
        $distribution = $snake->getDistribution();
        $habitat = $snake->getHabitat();
        $comportement = $snake->getComportement();
        $reproduction = $snake->getReproduction();

        $snakeId = [
            "id" => $id,
            "FrenchName" => $FrenchName,
            "LatinName" => $LatinName,
            "Image" => $Image,
            "Taille" => $taille,
            "Description" => $Description,
            "Nourriture" => $nourriture,
            "Distribution" => $distribution,
            "Habitat" => $habitat,
            "Comportement" => $comportement,
            "Reproduction" => $reproduction,
        ];
       
        
        return new JsonResponse($snakeId);
    }
}
