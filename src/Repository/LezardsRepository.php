<?php

namespace App\Repository;

use App\Entity\Lezards;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Lezards|null find($id, $lockMode = null, $lockVersion = null)
 * @method Lezards|null findOneBy(array $criteria, array $orderBy = null)
 * @method Lezards[]    findAll()
 * @method Lezards[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LezardsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Lezards::class);
    }

    // /**
    //  * @return Lezards[] Returns an array of Lezards objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Lezards
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
