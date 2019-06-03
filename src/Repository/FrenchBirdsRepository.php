<?php

namespace App\Repository;

use App\Entity\FrenchBirds;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method FrenchBirds|null find($id, $lockMode = null, $lockVersion = null)
 * @method FrenchBirds|null findOneBy(array $criteria, array $orderBy = null)
 * @method FrenchBirds[]    findAll()
 * @method FrenchBirds[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FrenchBirdsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, FrenchBirds::class);
    }

    // /**
    //  * @return FrenchBirds[] Returns an array of FrenchBirds objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FrenchBirds
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
