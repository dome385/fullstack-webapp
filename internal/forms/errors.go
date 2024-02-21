package forms

// map[key] = value
// map["key"] = [0 , 0 , 0 , 0]
//map["key1"] = [0 , 0 , 0 , 0]
type errors map[string][]string

// Add adds an error message
func (e errors) Add(field, message string) {
	e[field] = append(e[field], message)
}

// Get returns the first error message
func (e errors) Get(field string) string {
	es := e[field]
	if len(es) == 0 {
		return ""
	}

	return es[0]
}
