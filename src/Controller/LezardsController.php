<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Lezards;

class LezardsController extends AbstractController
{
    /**
     * @Route("/api/lezardsDetails", name="lezardsDetails")
     */
    public function index()
    {
        $lezardsArray = [];
        $lezards = $this->getDoctrine()->getRepository(Lezards::class);
        $lezardsEntities = $lezards->findAll();
        

        for ($i=0; $i < count($lezardsEntities); $i++) { 
            $lezard = $lezardsEntities[$i];
            $id = $lezard->getId();
            $FrenchName = $lezard->getFrenchName();
            $LatinName = $lezard->getLatinName();
            $Image = $lezard->getImage();
            $taille = $lezard->getTaille();
            $Description = $lezard->getDescription();
            $distribution = $lezard->getDistribution();
            $habitat = $lezard->getHabitat();
            $comportement = $lezard->getComportement();
            $reproduction = $lezard->getReproduction();

            $lezardArray = [
                "id" => $id,
                "FrenchName" => $FrenchName,
                "LatinName" => $LatinName,
                "Image" => $Image,
                "Taille" => $taille,
                "Description" => $Description,
                "Distribution" => $distribution,
                "Habitat" => $habitat,
                "Comportement" => $comportement,
                "Reproduction" => $reproduction,

            ];
            $lezardsArray[] = $lezardArray; //équivaut push en JS
        }
        
        return new JsonResponse($lezardsArray);

    }

    /** 
     * @Route("/api/lezardsDetails/{id}", name="OneLezardDetail")
    */
    public function getLezardById($id) {
       
        $lezard = $this->getDoctrine()->getRepository(lezards::class)->find($id);
        $id = $lezard->getId();
        $FrenchName = $lezard->getFrenchName();
        $LatinName = $lezard->getLatinName();
        $Image = $lezard->getImage();
        $taille = $lezard->getTaille();
        $Description = $lezard->getDescription();
        $distribution = $lezard->getDistribution();
        $habitat = $lezard->getHabitat();
        $comportement = $lezard->getComportement();
        $reproduction = $lezard->getReproduction();

        $lezardId = [
            "id" => $id,
            "FrenchName" => $FrenchName,
            "LatinName" => $LatinName,
            "Image" => $Image,
            "Taille" => $taille,
            "Description" => $Description,
            "Distribution" => $distribution,
            "Habitat" => $habitat,
            "Comportement" => $comportement,
            "Reproduction" => $reproduction,
        ];
       
        
        return new JsonResponse($lezardId);
    }
}
