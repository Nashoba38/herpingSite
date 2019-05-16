<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SnakesRepository")
 * @Vich\Uploadable
 */
class Snakes
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $FrenchName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $LatinName;

    /**
     * @ORM\Column(type="text")
     */
    private $Description;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $image;

    /**
     * @Vich\UploadableField(mapping="snakes_image", fileNameProperty="image")
     * @var File
     */
    private $imageFile;

    /**
     * @Vich\UploadableField(mapping="distribution_image", fileNameProperty="distribution")
     * @var File
     */
    private $distributionFile;


    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $taille;

    /**
     * @ORM\Column(type="text")
     */
    private $nourriture;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $distribution;

    /**
     * @ORM\Column(type="text")
     */
    private $habitat;

    /**
     * @ORM\Column(type="text")
     */
    private $comportement;

    /**
     * @ORM\Column(type="text")
     */
    private $reproduction;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFrenchName(): ?string
    {
        return $this->FrenchName;
    }

    public function setFrenchName(string $FrenchName): self
    {
        $this->FrenchName = $FrenchName;

        return $this;
    }

    public function getLatinName(): ?string
    {
        return $this->LatinName;
    }

    public function setLatinName(string $LatinName): self
    {
        $this->LatinName = $LatinName;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }
    
    public function setDescription(string $Description): self
    {
        $this->Description = $Description;
        
        return $this;
    }
    
    public function getImageFile()
    {
        return $this->imageFile;
    }
    
    public function setImageFile(File $image)
    {
        $this->imageFile = $image;
        
        if ($image) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }
    
    public function getDistributionFile()
    {
        return $this->distributionFile;
    }
    
    public function setDistributionFile(File $distribution)
    {
        $this->distributionFile = $distribution;
        
        if ($distribution) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }
    

    public function setImage($image)
    {
        $this->image = $image;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function getTaille(): ?string
    {
        return $this->taille;
    }

    public function setTaille(string $taille): self
    {
        $this->taille = $taille;

        return $this;
    }

    public function getNourriture(): ?string
    {
        return $this->nourriture;
    }

    public function setNourriture(string $nourriture): self
    {
        $this->nourriture = $nourriture;

        return $this;
    }

    public function getDistribution()
    {
        return $this->distribution;
    }

    public function setDistribution($distribution)
    {
        $this->distribution = $distribution;

        return $this;
    }

    public function getHabitat(): ?string
    {
        return $this->habitat;
    }

    public function setHabitat(string $habitat): self
    {
        $this->habitat = $habitat;

        return $this;
    }

    public function getComportement(): ?string
    {
        return $this->comportement;
    }

    public function setComportement(string $comportement): self
    {
        $this->comportement = $comportement;

        return $this;
    }

    public function getReproduction(): ?string
    {
        return $this->reproduction;
    }

    public function setReproduction(string $reproduction): self
    {
        $this->reproduction = $reproduction;

        return $this;
    }


}
