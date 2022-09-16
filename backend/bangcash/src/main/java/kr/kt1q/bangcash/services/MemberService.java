package kr.kt1q.bangcash.services;

import kr.kt1q.bangcash.entities.Member;
import kr.kt1q.bangcash.repositories.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository repository ;

    @Transactional
    public Member memberSave(Member member){
        return repository.save(member);
    }

    @Transactional
    public Member memberGet(Long id){
        return repository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("ID를 확인하세요!!")) ;
    }

    @Transactional
    public List<Member> memberGetAll(){
        return repository.findAll();
    }

    @Transactional
    public Member memberUpdate(Long id,Member member){
        Member memberEntity = repository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("ID를 확인하세요!!")) ; //영속화(member오브젝트)->영속성context보관
        memberEntity.setMname(member.getMname());
        memberEntity.setMphone(member.getMphone());
        memberEntity.setMaddress(member.getMaddress());
        return memberEntity;
    }

    @Transactional
    public String memberDelete(Long id){
        repository.deleteById(id); //오류가 터지면 익셉션을 타니까 신경쓰지말고
        return "ok";
    }
}
