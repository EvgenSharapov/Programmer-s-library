//package com.example.demo.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//    @Configuration
//    @EnableWebSecurity
//    public class SecurityConfig {
//
////        @Bean
////        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////            http
////                    .authorizeHttpRequests((requests) -> requests
////                            .requestMatchers("/", "/login","/index","/api/questions").permitAll() // Разрешаем доступ без авторизации
////                            .anyRequest().authenticated() // Все остальные запросы требуют авторизации
////                    )
////                    .formLogin((form) -> form
////                            .loginPage("/login") // Страница входа
////                            .permitAll() // Разрешаем доступ к странице входа всем
////                    )
////                    .logout((logout) -> logout
////                            .logoutSuccessUrl("/logout-success") // Перенаправление после выхода
////                            .permitAll() // Разрешаем выход всем
////                    );
////
////            return http.build();
////        }
//
//        @Bean
//        public UserDetailsService userDetailsService() {
//            // Создаем тестового пользователя (логин: user, пароль: password)
//            UserDetails user = User.withDefaultPasswordEncoder()
//                    .username("user")
//                    .password("password")
//                    .roles("USER")
//                    .build();
//
//            return new InMemoryUserDetailsManager(user);
//        }
//
//        @Bean
//        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//            http
//                    .csrf(csrf -> csrf.disable()) // Отключаем CSRF
//                    .authorizeHttpRequests(auth -> auth
//                            .requestMatchers("/", "/login","/index","/api/questions","/api/topics").permitAll() // Разрешаем доступ к эндпоинту
//                            .anyRequest().authenticated()
//                    )
//                    .formLogin((form) -> form
//                            .loginPage("/login") // Страница входа
//                            .permitAll() // Разрешаем доступ к странице входа всем
//                    )
//                    .logout((logout) -> logout
//                            .logoutSuccessUrl("/logout-success") // Перенаправление после выхода
//                            .permitAll() // Разрешаем выход всем
//                    );
//
//            return http.build();
//
//
//
//
//
////            http
////                    .authorizeRequests()
////                    .antMatchers("/css/**", "/js/**", "/images/**").permitAll() // Разрешить доступ к статическим ресурсам
////                    .anyRequest().authenticated() // Остальные запросы требуют аутентификации
////                    .and()
////                    .formLogin()
////                    .loginPage("/login")
////                    .permitAll()
////                    .and()
////                    .logout()
////                    .permitAll();
////            return http.build();
//
//
//}
//}
