package kr.kt1q.bangcash.controllers;

import kr.kt1q.bangcash.entities.Member;
import kr.kt1q.bangcash.services.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "*",allowedHeaders = "*")

@RequiredArgsConstructor
@RestController
public class MemberController {
    private final MemberService service ;

    @PostMapping("/member")
    public ResponseEntity<?> save(@RequestBody Member member){
        return new ResponseEntity<>(service.memberSave(member), HttpStatus.CREATED);
    }

    @GetMapping("/member")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(service.memberGetAll(), HttpStatus.OK); //200
    }

    @GetMapping("/member/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        return new ResponseEntity<>(service.memberGet(id), HttpStatus.OK); //200
    }

    @PutMapping("/member/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody Member member){
        return new ResponseEntity<>(service.memberUpdate(id,member), HttpStatus.OK); //200
    }

    @DeleteMapping("/member/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id,@RequestBody Member member){
        return new ResponseEntity<>(service.memberDelete(id), HttpStatus.OK); //200
    }
}
