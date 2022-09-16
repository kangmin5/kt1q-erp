package kr.kt1q.bangcash.repositories;

import kr.kt1q.bangcash.entities.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {

}
