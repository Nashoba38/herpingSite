<?php

namespace App\Repository;

use App\Entity\Snakes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Snakes|null find($id, $lockMode = null, $lockVersion = null)
 * @method Snakes|null findOneBy(array $criteria, array $orderBy = null)
 * @method Snakes[]    findAll()
 * @method Snakes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SnakesRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Snakes::class);
    }

    // /**
    //  * @return Snakes[] Returns an array of Snakes objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Snakes
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
