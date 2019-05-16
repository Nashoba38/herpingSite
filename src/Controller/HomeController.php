<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Snakes;

/**
 * @Route("/")
 */
class HomeController extends AbstractController
{
    /**
     * @Route("/home", name="home")
     */
    public function index()
    {
        $snakes = $this->getDoctrine()->getRepository(Snakes::class);


        return $this->render('home/index.html.twig', [
            'snakes' => $snakes->findAll(),
        ]);
    }

}