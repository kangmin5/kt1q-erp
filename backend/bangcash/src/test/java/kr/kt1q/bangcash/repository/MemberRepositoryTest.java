package kr.kt1q.bangcash.repository;

import kr.kt1q.bangcash.entities.Member;
import kr.kt1q.bangcash.repositories.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
public class MemberRepositoryTest {
    @Autowired
    private MemberRepository memberRepository;

    @Test
    public void insertMembers(){
        IntStream.rangeClosed(1,100).forEach(i->{
            Member member = Member.builder()
                .mname("name"+i)
                .mphone("phone"+i)
                .maddress("address"+i)
                .build();
            memberRepository.save(member);
        });
    }
}
