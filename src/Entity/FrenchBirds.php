<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FrenchBirdsRepository")
 */
class FrenchBirds
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
     */
    private $Image;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ImageFile;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Taille;

    /**
     * @ORM\Column(type="text")
     */
    private $Nourriture;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Distribution;

    /**
     * @ORM\Column(type="text")
     */
    private $Habitat;

    /**
     * @ORM\Column(type="text")
     */
    private $Comportement;

    /**
     * @ORM\Column(type="text")
     */
    private $Reproduction;

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

    public function getImage(): ?string
    {
        return $this->Image;
    }

    public function setImage(string $Image): self
    {
        $this->Image = $Image;

        return $this;
    }

    public function getImageFile(): ?string
    {
        return $this->ImageFile;
    }

    public function setImageFile(string $ImageFile): self
    {
        $this->ImageFile = $ImageFile;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getTaille(): ?string
    {
        return $this->Taille;
    }

    public function setTaille(string $Taille): self
    {
        $this->Taille = $Taille;

        return $this;
    }

    public function getNourriture(): ?string
    {
        return $this->Nourriture;
    }

    public function setNourriture(string $Nourriture): self
    {
        $this->Nourriture = $Nourriture;

        return $this;
    }

    public function getDistribution(): ?string
    {
        return $this->Distribution;
    }

    public function setDistribution(string $Distribution): self
    {
        $this->Distribution = $Distribution;

        return $this;
    }

    public function getHabitat(): ?string
    {
        return $this->Habitat;
    }

    public function setHabitat(string $Habitat): self
    {
        $this->Habitat = $Habitat;

        return $this;
    }

    public function getComportement(): ?string
    {
        return $this->Comportement;
    }

    public function setComportement(string $Comportement): self
    {
        $this->Comportement = $Comportement;

        return $this;
    }

    public function getReproduction(): ?string
    {
        return $this->Reproduction;
    }

    public function setReproduction(string $Reproduction): self
    {
        $this->Reproduction = $Reproduction;

        return $this;
    }
}
